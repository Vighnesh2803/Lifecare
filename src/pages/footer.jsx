export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} LifeCare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
