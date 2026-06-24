import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  serviceType: z.string().min(1, "Please select a service"),
  location: z.string().min(2, "Location required"),
  message: z.string().optional(),
});

export function Quote() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      serviceType: "",
      location: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong");
      }
      toast.success("Quote request sent! We'll be in touch shortly.");
      form.reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="quote" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* Left Side - Info */}
          <div className="md:w-2/5 bg-primary p-10 text-primary-foreground relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543822180-2a8292c7336d?q=80&w=2940&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-overlay pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-white">Need a Quote?</h3>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Fill out the form and our team will get back to you with a comprehensive, transparent estimate for your project.
              </p>
            </div>
            
            <div className="relative z-10 space-y-6">
              <div>
                <h4 className="font-semibold text-secondary uppercase tracking-wider text-sm mb-1">Emergency Calls</h4>
                <p className="text-xl font-bold text-white">082 123 4567</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary uppercase tracking-wider text-sm mb-1">Email Us</h4>
                <p className="text-base text-white break-all">holmesjj@mweb.co.za</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-3/5 p-10 bg-card">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-background border-border" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="082 123 4567" {...field} className="bg-background border-border" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="bg-background border-border" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Required</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background border-border">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="drilling">Borehole Drilling</SelectItem>
                            <SelectItem value="installation">Pump Installation</SelectItem>
                            <SelectItem value="repairs">Repairs & Maintenance</SelectItem>
                            <SelectItem value="testing">Borehole Testing</SelectItem>
                            <SelectItem value="solar">Solar Pump System</SelectItem>
                            <SelectItem value="tanks">Water Tank Supply</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location / Area</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Pretoria, Gauteng" {...field} className="bg-background border-border" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more about your requirements..." 
                          className="resize-none min-h-[100px] bg-background border-border"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full text-lg h-14 bg-primary hover:bg-primary/90">
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 w-5 h-5 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="mr-2 w-5 h-5" /> Request Quote</>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
