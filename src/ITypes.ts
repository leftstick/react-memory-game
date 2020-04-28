import React from 'react'

export type { ICard } from '@/helpers';

export interface IClickable {
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export enum STATUS {
  READY = 'READY',
  PLAYING = 'PLAYING',
  PASS = 'PASS'
}
