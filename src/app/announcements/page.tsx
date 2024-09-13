'use client';

import React from "react";
import Image from "next/image";
import Head from "next/head";

import { motion } from "framer-motion";

import NavBar from "../components/Navbar";
import NeueHaasGrotesk from "../NeueHaasGroteskFont";
import Announcements from "./annoucements";

import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, Timestamp } from "@firebase/firestore";
import { firestore } from "../../../firebase";

import { AnimatePresence } from "framer-motion";
import Curve from "../components/Layout/Curve";

interface WeeklyAnnoucement {
  title: string;
  content: string;
  date: Timestamp;
  location?: string;
}

export default function Home() {
  const [weeklyAnnoucements, setWeeklyAnnoucements] = React.useState<WeeklyAnnoucement[]>([]);

  const updateWeeklyAnnoucements = async () => {
    const snapshot = query(collection(firestore, "events/announcements/weekly"));
    const docs = await getDocs(snapshot);
    const weeklyAnnoucementsList: WeeklyAnnoucement[] = [];
    
    docs.forEach((doc) => {
      weeklyAnnoucementsList.push({ title: doc.id, content: doc.data().content, date: doc.data().date, location: doc.data().location })
    })
    setWeeklyAnnoucements(weeklyAnnoucementsList)
  }

  React.useEffect(() => {
    updateWeeklyAnnoucements();
  }, [])

  const convertDate = (d: Timestamp) => {
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(d.toDate())
  }

  return (
    <>
      <Head>
        <title>SBU KCF | Annoucements</title>
      </Head>

      <motion.main className={`${NeueHaasGrotesk.variable}` + " bg-[#222428]"}>
        <NavBar />
        <div className={"font-neueHaasGrotesk font-[400] w-full min-h-[calc(100vh-8rem)] h-[100%] flex flex-col justify-start items-center pt-[6rem]"}>
          <Announcements announcementType={"weekly"} />
        </div>
      </motion.main>

    </>
  );
}
