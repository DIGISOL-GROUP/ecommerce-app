"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  function onSubmit() {
    // Simulate sending
    setTimeout(() => {
      reset();
    }, 1200);
  }

  return (
    <>
      <div className="text-neutral-200 text-center mb-8">
        Whether you’re planning a mega-watt industrial project or a residential installation, our energy consultants are here to guide you. Reach out for a free quote or consultation.<br /><br />
        <span className="block font-semibold text-cyan-300">Main Office:</span> 123 Innovation Drive, Tech City, CA 94000<br />
        <span className="block font-semibold text-cyan-300">Email:</span> info@nexshop.com<br />
        <span className="block font-semibold text-cyan-300">Phone:</span> +1 (800) 555-0199
      </div>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-black/80 to-neutral-900/80 border border-cyan-800/40 rounded-2xl p-8 shadow-xl max-w-lg mx-auto flex flex-col gap-5"
      >
        <input
          {...register("name")}
          placeholder="Your Name"
          className="px-4 py-2 rounded bg-neutral-900 border border-neutral-700 text-white"
        />
        {errors.name && <span className="text-red-400 text-sm">Name is required</span>}
        <input
          {...register("email")}
          placeholder="Your Email"
          className="px-4 py-2 rounded bg-neutral-900 border border-neutral-700 text-white"
        />
        {errors.email && <span className="text-red-400 text-sm">Valid email required</span>}
        <textarea
          {...register("message")}
          placeholder="Your Message"
          className="px-4 py-2 rounded bg-neutral-900 border border-neutral-700 text-white min-h-[120px]"
        />
        {errors.message && <span className="text-red-400 text-sm">Message must be at least 10 characters</span>}
        <button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded transition mt-2"
        >
          Send Message
        </button>
        {isSubmitSuccessful && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 text-center mt-2"
          >
            Thank you! We&apos;ll get back to you soon.
          </motion.div>
        )}
      </motion.form>
    </>
  );
}
