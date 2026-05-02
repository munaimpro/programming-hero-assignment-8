import LoginForm from '@/components/LoginForm';
import { Suspense } from 'react';

export default function LoginPage() {
    return (
        <Suspense fallback={<span className="text-gray-500 my-25 loading loading-bars loading-lg"></span>}>
            <LoginForm></LoginForm>
        </Suspense>
    );
}