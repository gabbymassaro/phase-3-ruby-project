import React from "react"
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Link } from "react-router-dom"

const Sidebar = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial",
      }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Travel Planner ✈️
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link to="/">
              <CDBSidebarMenuItem>Dashboard</CDBSidebarMenuItem>
            </Link>
            <Link to="/locations">
              <CDBSidebarMenuItem>Create New Trip</CDBSidebarMenuItem>
            </Link>
            <Link to="/trips">
              <CDBSidebarMenuItem>My Travels</CDBSidebarMenuItem>
            </Link>
            <Link to="/calendar">
              <CDBSidebarMenuItem>Calendar</CDBSidebarMenuItem>
            </Link>
            <Link to="/stats">
              <CDBSidebarMenuItem>Stats</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  )
}

export default Sidebar
