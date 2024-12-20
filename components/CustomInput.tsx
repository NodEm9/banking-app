import { authFormSchema } from '@/lib/utils'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath, Form } from 'react-hook-form'
import { z } from 'zod'

const formSchema = authFormSchema('Sign-Up')

interface CustomInputProps {
	control: Control<z.infer<typeof formSchema>>
	name: FieldPath<z.infer<typeof formSchema>>
	label: string
	placeholder: string
}

type Id =
	| 'email'
	| 'password'
	| 'address'
	| 'firstName'
	| 'lastName'
	| 'state'
	| 'city'
	| 'postalCode'
	| 'dateOfBirth'
	| 'ssn'


const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<div className='form-item'>
					<FormLabel className='form-label'>
						{label}
					</FormLabel>
					<div className='flex w-full flex-col'>
						<FormControl>
							<Input
								type={name === 'password' ? 'password' : 'text'}
								placeholder={placeholder}
								className='input-class'
								{...field}
								id={name as Id}
							/>
						</FormControl>
						<FormMessage className='form-message mt-2' />
					</div>
				</div>
			)}
		/>
	)
}

export default CustomInput