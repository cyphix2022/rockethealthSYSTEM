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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
// Changed name to FieldType
import { FieldType } from "./forms/PatientForm"


interface CustomProps{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>,
    fieldType: FieldType // This is where i changed the file name,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renderSkeleton?: (field: any) => React.ReactNode,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RenderInput = (props: CustomProps) => {
  return (
    <Input {...props} />
  )
}





// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CustomFormField = ({ control, fieldType, name, label }: CustomProps) => {
  return (
    <FormField
          control={control}
          name={name}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field }) => (
            <FormItem className="flex-1">
              {fieldType !== FieldType.CHECKBOX && label && (
                <FormLabel>{label}</FormLabel>
              )}

            
            </FormItem>
          )}
        />
  )
}

export default CustomFormField
