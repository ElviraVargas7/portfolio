import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex flex-col gap-3 bg-white dark:bg-black px-4 md:px-16">
            <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-start">
                <div className="flex flex-col gap-4">
                    <p className="text-[#c7417b] font-bold text-2xl">EVB</p>
                    <p className="text-[#7a5e73] dark:text-[#FFB8DB] text-sm">Software Engineer focused on building reliable web platforms, AI powered systems, and scalable backend solutions.</p>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="font-bold dark:text-[#FFB8DB]">Quick Links</p>
                    <p className="text-[#7a5e73] dark:text-[#FFB8DB] text-sm">About</p>
                    <p className="text-[#7a5e73] dark:text-[#FFB8DB] text-sm">Skills</p>
                    <p className="text-[#7a5e73] dark:text-[#FFB8DB] text-sm">Projects</p>
                    <p className="text-[#7a5e73] dark:text-[#FFB8DB] text-sm">Contact</p>
                    <p className="text-[#7a5e73] dark:text-[#FFB8DB] text-sm">CV</p>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="font-bold dark:text-[#FFB8DB]">Connect</p>
                    <div className="flex flex-row gap-2">
                        <Image
                        src="/icons/github-pink.svg"
                        alt="Github logo"
                        width={30}
                        height={10}
                        priority
                        />
                        <Image
                        src="/icons/email-pink.svg"
                        alt="Email logo"
                        width={30}
                        height={10}
                        priority
                        />
                        <Image
                        src="/icons/linkedin-pink.svg"
                        alt="LinkedIn icon"
                        width={25}
                        height={10}
                        priority
                        />
                    </div>
                </div>
            </div>

            <div className="text-gray-200 dark:text-[#c7417b]">
                <hr />
            </div>

            <div className="py-4 text-center">
                <p className="text-[#7a5e73] dark:text-[#FFB8DB]">© 2025 Elvira Vargas Bermudez. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;