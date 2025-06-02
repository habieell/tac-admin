import OverviewCard from "@components/OverviewCard"
import StatusBadge from "@components/StatusBadge"

export default function DashboardPage() {
  return (
    <>
      <OverviewCard title="Clients" value={7265} change="+11.01%" isPositive />
      <StatusBadge status="Approved" />
    </>
  )
}