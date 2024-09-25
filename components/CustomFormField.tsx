'use client'

import {   
// eslint-disable-next-line @typescript-eslint/no-unused-vars
FormControl,
// eslint-disable-next-line @typescript-eslint/no-unused-vars
FormDescription,
// eslint-disable-next-line @typescript-eslint/no-unused-vars
FormField,
// eslint-disable-next-line @typescript-eslint/no-unused-vars
FormItem,
// eslint-disable-next-line @typescript-eslint/no-unused-vars
FormLabel,
// eslint-disable-next-line @typescript-eslint/no-unused-vars
FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
// Changed name to FieldType
import { FieldType } from "./forms/PatientForm"


interface CustomProps{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>,
    fieldType: FieldType

}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CustomFormField = ({ control, fieldType }: CustomProps) => {
  return (
    <FormField
          control={control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
  )
}

export default CustomFormField
