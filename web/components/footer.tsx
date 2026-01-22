export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center p-4 bg-gray-100 border-t">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Rafiki. All rights reserved.
      </p>
    </footer>
  );
}
