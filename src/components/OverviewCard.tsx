interface OverviewCardProps {
  title: string
  value: number | string
  change?: string
  isPositive?: boolean
}

export default function OverviewCard({ title, value, change, isPositive }: OverviewCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl p-4 shadow flex flex-col gap-1">
      <h3 className="text-sm text-zinc-500 dark:text-zinc-400">{title}</h3>
      <p className="text-2xl font-bold text-zinc-900 dark:text-white">{value}</p>
      {change && (
        <span
          className={`text-sm font-medium ${
            isPositive ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {change}
        </span>
      )}
    </div>
  )
}