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
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/Validation"
import { useRouter } from "next/navigation"

export enum FieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phone_Input",
  DATE_PICKER = "date_Picker",
  SELECT = "select",
  SKELETON = "skeleton",
  CHECKBOX = "CHECKBOX",
}
 

 
const PatientForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, SetIsLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })
 
  // 2. Define a submit handler.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
    // ✅ This will be type-safe and validated.
    SetIsLoading(true); // i have changed the spelling from setIsLoading to be SetIsLoading
    
    
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const userData = { name,email,phone };

      // const user = await createUser(userData);

      // if(user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
      console.log(error);
    }
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
          label="Full name"
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

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}

export default PatientForm

// Before adding another component