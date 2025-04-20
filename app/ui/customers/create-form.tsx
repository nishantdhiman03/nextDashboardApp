// app/ui/customers/create-form.tsx
'use client'; // This component needs interactivity for form state

import Link from 'next/link';
import { useFormState } from 'react-dom';
import { Button } from '@/app/ui/button'; // Assuming you have a Button component
import { createCustomer } from '@/app/lib/actions'; // Adjust path if needed
import { CustomerFormState } from '@/app/lib/definitions'; // Adjust path if needed

export default function CreateCustomerForm() {
    const initialState: CustomerFormState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(createCustomer, initialState);

    return (
        // Pass the dispatch function to the form's action attribute
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Customer Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Customer Name
                    </label>
                    <div className="relative">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter customer name"
                            className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby="name-error"
                            required // Basic HTML validation
                        />
                        {/* Icon could go here if needed */}
                    </div>
                    {/* Display validation errors for name */}
                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.name &&
                            state.errors.name.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Customer Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email Address
                    </label>
                    <div className="relative">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter email address"
                            className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby="email-error"
                            required
                        />
                        {/* Icon could go here */}
                    </div>
                    <div id="email-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.email &&
                            state.errors.email.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Customer Image URL */}
                <div className="mb-4">
                    <label htmlFor="image_url" className="mb-2 block text-sm font-medium">
                        Image URL
                    </label>
                    <div className="relative">
                        <input
                            id="image_url"
                            name="image_url"
                            type="url"
                            placeholder="Enter image URL (e.g., https://...)"
                            className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                            aria-describedby="image_url-error"
                            required
                        />
                        {/* Icon could go here */}
                    </div>
                    <div id="image_url-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.image_url &&
                            state.errors.image_url.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Display generic form message */}
                {state.message && (
                    <div aria-live="polite" className="my-2 text-sm text-red-500">
                        <p>{state.message}</p>
                    </div>
                )}

            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/customers" // Link back to the customers list
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Create Customer</Button>
            </div>
        </form>
    );
}
