import Image from "next/image";
import angela from "@/public/angela.jpg";
import angela2 from "@/public/angela-desk.jpg";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between text-cream-500 bg-blue-500">

            <div className="flex w-full flex-col relative bg-gradient-to-br from-gray-100 to-blue-100 text-blue-950 pb-14">
                <div className="bg-orange1-500 text-center bg-opacity-80 bottom-0 py-10 mb-5">
                    <h1 className="font-header px-6 text-4xl lg:text-6xl text-blue-500 mb-3 uppercase">Angela Bradsky
                        Rafferty</h1>
                    <h2 className="font-body text-xl lg:text-5xl text-center text-blue-500 bg-cream-500 uppercase">For
                        Area 3 School Board</h2>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-14 mb-6">
                    <p className="w-full max-w-lg text-xl text-justify">Angela Bradsky Rafferty is a devoted wife,
                        mother, and
                        lifelong educator with over 30 years of
                        experience in teaching. Since joining the Rapid City Area Schools in 1994, Angela has taught
                        special
                        education, literacy, first grade, Reading Recovery, and kindergarten, bringing a wealth of
                        knowledge
                        and passion to every classroom she entered. After retiring in 2022, her dedication to education
                        didn’t stop — she has continued to give back by volunteering in classrooms, supporting students,
                        and
                        staying connected to the community she loves.
                        <br/><br/>Now, Angela is excited to take the next step in serving her community by running for
                        the RCAS
                        School
                        Board. She is eager to bring her experience and unwavering passion for education to the board,
                        working to ensure every child in the district has the opportunity to succeed.</p>
                    <Image
                        className="bg-slate-500 object-bottom rounded-full size-full max-w-lg object-cover border-8 border-blue-500"
                        src={angela} alt=""/>
                </div>


            </div>

            <div className="bg-blue-500 w-full flex justify-around">
                <div className="max-w-screen-lg py-10 text-center px-2">

                    <p className="text-4xl mb-6">Absentee and Early Voting Began: <span
                        className="font-bold">May 19, 2025</span></p>
                    <p className="text-4xl">Election Day: <span className="font-bold">June 3, 2025</span></p>
                </div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-blue-100 w-full flex flex-wrap items-center justify-center" id="issues">
                <Image src={angela2} alt=""/>
                <div className="flex flex-col justify-center max-w-screen-lg mx-auto p-14">
                    <h2 className="font-body text-5xl mb-6 mt-8 uppercase text-orange1-500">Priorities
                    </h2>
                    <div className="flex flex-wrap text-blue-500">
                        <div
                            className="grow text-3xl p-3 border-2 border-white m-2">
                            <strong>Academic Success:</strong> Prioritize a transparent curriculum fosters critical thinking,
                            problem-solving, and a love of learning, while strengthening classroom academics and
                            respecting families’ role in teaching personal values.
                        </div>
                        <div
                            className="grow text-3xl p-3 border-2 border-white m-2">
                            <strong>Balanced Education:</strong> Promote well-rounded classrooms by maximizing instructional time, fostering meaningful learning, reducing excessive testing, and closing learning gaps.
                        </div>
                        <div
                            className="grow text-3xl p-3 border-2 border-white m-2">
                            <strong>Supported Teachers:</strong> Equip teachers with the tools and resources they need to help every student thrive, while supporting teachers and staff in creating classroom environments that inspire students to succeed.
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
