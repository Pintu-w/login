import React from 'react'
import { Header02 } from './Header02'
import { Outlet } from 'react-router'

export const AdminHome = () => {
  return (
    <>
    <Header02/>
    <Outlet/>
    </>
  )
}
