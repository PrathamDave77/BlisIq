import React from 'react'

const tooltipPagination = ({variant}) => {
  return (
    <>
    {variant==="dot" && <div className="flex items-center gap-md">
      <div className={cn(actions({variant}))}></div>
      <div className={cn(actions({variant}))}></div>
      <div className={cn(actions({variant}))}></div>
    </div> || variant==="text" && <div className={cn(actions({variant}))}>1 of 3</div>}
    </>
  )
}

const actions = cva(
  {
    variants:{
      variant:{
        dot:"inline-flex items-start w-[var(--spacing-md)] h-[var(--spacing-md)] rounded-[6px] bg-bg-quaternary focus-visible:bg-fg-brand-primary-alt ",
        text:"inline-flex justify-center items-center gap-[8px] text-text-quaternary font-family-body text-sm leading-sm",
      },
    },
  }, 
);

export default tooltipPagination
