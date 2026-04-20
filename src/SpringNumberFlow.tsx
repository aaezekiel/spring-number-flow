import NumberFlow, { type NumberFlowProps } from '@number-flow/react'

export const SPRING_EASING = 'linear(0,.068,.142,.226,.324,.436,.558,.684,.806,.916,1.006,1.072,1.114,1.134,1.134,1.118,1.091,1.058,1.024,.993,.967,.948,.936,.931,.931,.935,.941,.948,.955,.961,.966,.971,.974,.977,.98,.982,.984,.986,.988,.989,.991,.992,.993,.994,.995,.996,.997,.998,.999,.999,1)'

export interface SpringNumberFlowProps extends Omit<NumberFlowProps, 'transformTiming' | 'spinTiming' | 'opacityTiming' | 'continuous'> {
  duration?: number
  opacityDuration?: number
}

export function SpringNumberFlow({
  duration = 750,
  opacityDuration = 350,
  ...props
}: SpringNumberFlowProps) {
  return (
    <NumberFlow
      transformTiming={{ duration, easing: SPRING_EASING }}
      spinTiming={{ duration, easing: SPRING_EASING }}
      opacityTiming={{ duration: opacityDuration, easing: 'ease-out' }}
      continuous
      {...props}
    />
  )
}
