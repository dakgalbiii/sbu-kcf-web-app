// import NeueHaasGrotesk from "../NeueHaasGroteskFont";

export const metadata = {
  title: 'SBU KCF | Annoucements',
  description: 'Announcements',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>{children}</section>
  )
}
