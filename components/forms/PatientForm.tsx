"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from "@/components/ui/button"
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
Form } from "@/components/ui/form"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Input } from "@/components/ui/input"
import CustomFormField from "../CustomFormField"

export enum FieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phone_Input",
  DATE_PICKER = "date_Picker",
  SELECT = "select",
  SKELETON = "skeleton",
  CHECKBOX = "CHECKBOX",
}
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
const PatientForm = () => {
  // 1. Define your form.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
            <h1 className="header">Hi there 👋</h1>
            <p className="tex-dark-700">Schedule your first appointment</p>
        </section>

        <CustomFormField
          fieldType={FieldType.INPUT}
          control={form.control}
          name="name"
          label="Fullname"
          placeholder="Enter your username"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="Carepulse@UG" // Using a simple placeHolder
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="(256) 79234901242" // Using a simple placeHolder
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default PatientForm

// Before adding another component