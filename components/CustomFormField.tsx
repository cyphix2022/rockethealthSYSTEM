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

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const RenderField = ({ field, props }: {field: any; props: CustomProps}) => {
  return (
    <Input
     type="text"
     placeholder="John Doe"
    />
  )
}





// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label} = props;
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
              
              <RenderField field={field} props={props} />

              <FormMessage className="shad-error" />
            </FormItem>
          )}
        />
  )
}

export default CustomFormField
