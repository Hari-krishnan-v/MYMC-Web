import React from 'react'
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from "../../components/ui/accordion"

export const Faq = () => {
    return (
        <section id={"faq"} className={'h-[100vh] w-full flex justify-center items-center relative'}>
            <div className="gradient-overlay2 h-full"></div>


            <div className={'w-1/3 z-50 '}>

                <AccordionRoot collapsible defaultValue={["b"]}>
                    {items.map((item, index) => (
                        <AccordionItem key={index} value={item.value}>
                            <AccordionItemTrigger className={'my-4 '}>{item.title}</AccordionItemTrigger>
                            <AccordionItemContent>{item.text}</AccordionItemContent>
                        </AccordionItem>
                    ))}
                </AccordionRoot>
            </div>
        </section>
    )
}

const items = [
    {
        value: "a", title: "First Item", text: "server hosting options encompasses the most in-demand\n" + "" +
            "                                 platforms of today. Within our offerings, you'll discover an extensive array of\n" +
            "                                 specialized tools and features tailored to each game, all of which we diligently keep up." },
    { value: "b", title: "Second Item", text:  "server hosting options encompasses the most in-demand\n" + "" +
            "                                 platforms of today. Within our offerings, you'll discover an extensive array of\n" +
            "                                 specialized tools and features tailored to each game, all of which we diligently keep up." },
    { value: "c", title: "Third Item", text: "server hosting options encompasses the most in-demand\n" + "" +
            "                                 platforms of today. Within our offerings, you'll discover an extensive array of\n" +
            "                                 specialized tools and features tailored to each game, all of which we diligently keep up." },

]