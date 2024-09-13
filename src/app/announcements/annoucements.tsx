import React from "react";
import { collection, deleteDoc, getDocs, query, Timestamp } from "@firebase/firestore";
import { firestore } from "../../../firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface Annoucement {
    title: string;
    content: string;
    date?: Timestamp;
    location?: string;
}

interface AnnoucementType {
    announcementType: "weekly" | "special"
}

export default function Announcements(props: AnnoucementType) {
    const [annoucements, setAnnoucements] = React.useState<Annoucement[]>([]);

    const updateAnnoucements = async () => {
        const snapshot = query(collection(firestore, ("events/announcements/" + props.announcementType)))
        const docs = await getDocs(snapshot)
        const announcementList: Annoucement[] = []
        docs.forEach((doc) => {
            announcementList.push({ title: doc.data().title, content: doc.data().content, date: doc.data().date, location: doc.data().location })
        })
        setAnnoucements(announcementList);
    }

    React.useEffect(() => {
        updateAnnoucements();
    },[])

    const convertDate = (d: Timestamp) => {
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(d.toDate())
    }

    return (
        <div className="font-neueHaasLight">
            <h1 className="font-neueHaasLight capitalize text-[60px] tracking-[3px]">{props.announcementType} Annoucements</h1>
            <div className="flex flex-col justify-center items-center space-y-[2rem] w-full sm:w-[88vw], md:w-[80vw] lg:w-[70vw] divide-y divide-[#fefbf5]">
                {annoucements.map((annoucement, index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ y: -5, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeIn", duration: 0.2, delay: index * 0.1 }}
                            className="py-[1rem] px-[0.5rem] w-full"
                        >
                            <div className="flex flex-row justify-between items-center ">
                                <h1 className="text-[3rem]">{annoucement.title}</h1>
                                <div className="flex flex-col justify-between items-end h-full">

                                    <div className="flex flex-row justify-center items-center space-x-[0.4rem]">
                                        <FontAwesomeIcon icon={faCalendar} />
                                        <p className="text-[15px]">{(annoucement.date) ? convertDate(annoucement.date) : "TBD"}</p>
                                    </div>

                                    <div className="flex flex-row justify-center items-center space-x-[0.4rem]">
                                        <FontAwesomeIcon icon={faMapPin} />
                                        <p className="text-[15px]">{annoucement.location}</p>
                                    </div>
                                </div>

                            </div>
                            <p className="text-[20px]">{annoucement.content}</p>

                        </motion.div>
                    )
                })}
            </div>

        </div>
    )
}