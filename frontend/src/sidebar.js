import React from "react"
import {
  CDBSidebar,
  CDBSidebarContent,
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
            <Link to="/activities">
              <CDBSidebarMenuItem>Activities</CDBSidebarMenuItem>
            </Link>
            <Link to="/stats">
              <CDBSidebarMenuItem>Stats</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
      <div style={{ flex: 1, overflowY: "auto" }}>{children}</div>
    </div>
  )
}

export default Sidebar
