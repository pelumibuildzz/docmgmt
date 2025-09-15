import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Document Management System</h1>
        <p className="text-lg text-gray-600">Welcome to your document management platform</p>
        <div className="space-x-4">
          <Link 
            href="/signin" 
            className="inline-block px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
          >
            Sign In
          </Link>
          <Link 
            href="/signin-new" 
            className="inline-block px-6 py-3 border border-primary text-primary rounded-xl font-semibold hover:bg-primary-light transition-colors"
          >
            Log in as New Member
          </Link>
        </div>
      </div>
    </main>
  );
}
