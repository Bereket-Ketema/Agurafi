"use client"

import { useState, type FormEvent } from "react"
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

interface FormState {
  name: string
  email: string
  subject: string
  message: string
  botcheck: string // Honeypot spam check
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    botcheck: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required."
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address."
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required."
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty."
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters in your message."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Honeypot spam protection: if bot filled this hidden field, fail silently
    if (formData.botcheck) {
      return
    }

    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      setIsSubmitting(false)
      setSubmitStatus("error")
      setErrorMessage(
        "Web3Forms access key is not configured. Please add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your environment (.env.local)."
      )
      return
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          from_name: "AGURAFI Digital Marketing Website",
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus("success")
        // Reset form only on confirmed success
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          botcheck: "",
        })
        setErrors({})
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.message || "Failed to send your message. Please try again or email us directly.")
      }
    } catch {
      setSubmitStatus("error")
      setErrorMessage("Network error occurred while connecting to the form service. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative rounded-3xl border border-white/10 bg-card p-6 sm:p-10 backdrop-blur-md shadow-[0_24px_50px_rgba(0,0,0,0.35)]">
      {/* Success Notification */}
      {submitStatus === "success" && (
        <div className="mb-8 flex items-start gap-3.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-emerald-300">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" />
          <div>
            <h4 className="font-heading text-base font-bold text-emerald-200">
              Message Sent Successfully!
            </h4>
            <p className="mt-1 text-sm text-emerald-300/90 leading-relaxed">
              Thank you for reaching out. We have received your inquiry and our team will get back to you within 24
              hours.
            </p>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {submitStatus === "error" && (
        <div className="mb-8 flex items-start gap-3.5 rounded-2xl border border-red-500/30 bg-red-500/10 p-5 text-red-300">
          <AlertCircle className="mt-0.5 size-5 shrink-0 text-red-400" />
          <div>
            <h4 className="font-heading text-base font-bold text-red-200">
              Unable to Send Message
            </h4>
            <p className="mt-1 text-sm text-red-300/90 leading-relaxed">
              {errorMessage}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Web3Forms Honeypot Spam Protection (Hidden from legitimate users) */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
          checked={!!formData.botcheck}
          onChange={(e) => setFormData((prev) => ({ ...prev, botcheck: e.target.checked ? "spam" : "" }))}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Full Name Field */}
        <div>
          <label htmlFor="fullName" className="mb-2 block text-xs font-bold uppercase tracking-wider text-accent">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={formData.name}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, name: e.target.value }))
              if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }))
            }}
            placeholder="e.g. Abebe Bikila"
            disabled={isSubmitting}
            className={`w-full rounded-xl border bg-black/25 px-4 py-3.5 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-500/60 focus:ring-red-500/40"
                : "border-white/10 focus:border-primary/50 focus:ring-primary/20"
            }`}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="emailAddress" className="mb-2 block text-xs font-bold uppercase tracking-wider text-accent">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            id="emailAddress"
            type="email"
            required
            value={formData.email}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }))
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
            }}
            placeholder="e.g. name@company.com"
            disabled={isSubmitting}
            className={`w-full rounded-xl border bg-black/25 px-4 py-3.5 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-500/60 focus:ring-red-500/40"
                : "border-white/10 focus:border-primary/50 focus:ring-primary/20"
            }`}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="mb-2 block text-xs font-bold uppercase tracking-wider text-accent">
            Subject <span className="text-red-400">*</span>
          </label>
          <input
            id="subject"
            type="text"
            required
            value={formData.subject}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, subject: e.target.value }))
              if (errors.subject) setErrors((prev) => ({ ...prev, subject: undefined }))
            }}
            placeholder="e.g. Growth Marketing & Paid Ads Inquiry"
            disabled={isSubmitting}
            className={`w-full rounded-xl border bg-black/25 px-4 py-3.5 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 ${
              errors.subject
                ? "border-red-500/60 focus:ring-red-500/40"
                : "border-white/10 focus:border-primary/50 focus:ring-primary/20"
            }`}
          />
          {errors.subject && <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-accent">
            Your Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, message: e.target.value }))
              if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }))
            }}
            placeholder="Tell us about your brand, current challenges, and what you aim to achieve..."
            disabled={isSubmitting}
            className={`w-full resize-y rounded-xl border bg-black/25 px-4 py-3.5 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 ${
              errors.message
                ? "border-red-500/60 focus:ring-red-500/40"
                : "border-white/10 focus:border-primary/50 focus:ring-primary/20"
            }`}
          />
          {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-primary to-[#c68c12] px-8 py-4 text-base font-semibold text-primary-foreground shadow-[0_8px_24px_rgba(228,172,35,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(228,172,35,0.5)] disabled:cursor-not-allowed disabled:opacity-60 active:scale-95"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <Send className="size-4.5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
