const contacts = [
  {
    label: "Email",
    value: "adityagore068@gmail.com",
    href: "mailto:adityagore068@gmail.com",
  },
  {
    label: "Phone",
    value: "+91-9405332960",
    href: "tel:+919405332960",
  },
  {
    label: "Location",
    value: "Vadodara, Gujarat, India",
    href: "#",
  },
];

export default function ContactInfoBar() {
  return (
    <div
      className="flex items-start gap-0 mt-12 animate-slide-up delay-700"
      role="contentinfo"
      aria-label="Contact information"
    >
      {contacts.map((contact, i) => (
        <div key={contact.label} className="flex items-stretch">
          {/* Divider (not before first item) */}
          {i > 0 && (
            <div className="w-px bg-light-gray mx-6 self-stretch min-h-[40px]" />
          )}

          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-bold uppercase tracking-widest text-charcoal">
              {contact.label}
            </span>
            <a
              href={contact.href}
              className="text-sm text-mid-gray hover:text-accent transition-colors duration-200 whitespace-nowrap"
            >
              {contact.value}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
