interface StatusBadgeProps {
  status: 'Pending' | 'In Progress' | 'Complete' | 'Approved' | 'Rejected'
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const colorMap: Record<string, string> = {
    'Pending': 'bg-blue-100 text-blue-800',
    'In Progress': 'bg-purple-100 text-purple-800',
    'Complete': 'bg-green-100 text-green-800',
    'Approved': 'bg-yellow-100 text-yellow-800',
    'Rejected': 'bg-red-100 text-red-800',
  }

  return (
    <span className={`text-xs px-2 py-1 rounded-full font-medium ${colorMap[status]}`}>
      {status}
    </span>
  )
}