import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { cn } from '@/lib/utils'
import { gridItems } from '@/Data'
import { it } from 'node:test'

const Grid = () => {
  return (
    <section id='about' className='py-20'>
      
      <BentoGrid>
        {gridItems.map(({id,title,description,
          className, img,imgClassName,titleClassName,
          spareImg}) => (
            <BentoGridItem
        id = {id}
        key={id}
        title={title}
        description={description}
        className={className}
        img = {img}
        imgClassName={imgClassName}
        titleClassName={titleClassName}
        spareImg={spareImg}
        />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
