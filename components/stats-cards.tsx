import { Info, ChevronUp, ChevronsUp, ChevronsDown } from 'lucide-react'
import { CornerBorderCard } from '@/components/ui/corner-border-card'

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
      change: '+2 ',
      changeType: 'positive',
    },
    {
      title: 'Passing Tests',
      value: 37,
      change: '+41% ',
      changeType: 'positive',
    },
    {
      title: 'Failing Tests',
      value: 10,
      change: '-4% ',
      changeType: 'negative',
    },
    {
      title: 'Builds',
      value: 4,
      change: '+24% ',
      changeType: 'positive',
    },
  ]

  return (
    <div className="grid grid-cols-4">
      {stats.map((stat) => (
        <CornerBorderCard key={stat.title}>
          <div className="p-4">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-sm text-muted-foreground">{stat.title}</span>
              <Info size={16} className="text-muted-foreground opacity-60" />
            </div>
            <div className="text-3xl  text-foreground mb-1">{stat.value}</div>
            <div className={`text-sm flex items-center`}>
              {stat.changeType === 'positive' && <ChevronsUp size={14} className="text-green-700 -mr-0.1" />}
              {stat.changeType === 'negative' && <ChevronsDown size={14} className="text-green-700 -mr-0.1" />}
              <p className="text-green-700">
                {stat.change}
              </p>
              <span className='text-zinc-500 ml-1'> vs last week</span>
            </div>
          </div>
        </CornerBorderCard>
      ))}
    </div>
  )
}
