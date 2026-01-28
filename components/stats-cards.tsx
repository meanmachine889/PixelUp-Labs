import { Info } from 'lucide-react'

interface StatCardProps {
  title: string
  value: number | string
  change: string
  changeType?: 'positive' | 'neutral' | 'negative'
}

export function StatsCards() {
  const stats: StatCardProps[] = [
    {
      title: 'Total Tests',
      value: 47,
      change: '+2 vs last week',
      changeType: 'positive',
    },
    {
      title: 'Passing Tests',
      value: 37,
      change: '+41% vs last week',
      changeType: 'positive',
    },
    {
      title: 'Failing Tests',
      value: 10,
      change: '0% vs last week',
      changeType: 'neutral',
    },
    {
      title: 'Builds',
      value: 4,
      change: '+2.24% vs last week',
      changeType: 'positive',
    },
  ]

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-card rounded-lg p-4 border border-border">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-muted-foreground">{stat.title}</span>
            <Info size={14} className="text-muted-foreground opacity-60" />
          </div>
          <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
          <div className={`text-xs ${stat.changeType === 'positive' ? 'text-green-400' : 'text-muted-foreground'}`}>
            {stat.change}
          </div>
        </div>
      ))}
    </div>
  )
}
