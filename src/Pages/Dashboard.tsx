import { GlobalStytle } from "../styles/global";
import { Header } from "../components/Header";
import { Dashboard } from "../components/Dashboard";
import Modal from 'react-modal';
import { useState } from 'react';
import {NewCourseModal} from '../components/NewCourseModal'



export function PageDashboard() {
    return (
      <>
        <Header /> 
        <Dashboard />
        <GlobalStytle />
      </>
    )
  }