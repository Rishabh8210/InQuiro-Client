import Link from "next/link";

const QuickPostShare = () => {
    return (
        <div className="min-h-28 w-full flex flex-col border-2 p-2 gap-2 rounded-xl">
            <div className="h-fit w-full rounded-md flex justify-between gap-3">
                <img alt="DP" className="h-12 dark:invert" src="/userButton.png"/>
                <Link href={'/post'} className="h-11 w-full bg-transparent border-2 rounded-full py-2 px-3.5 outline-0">What do you want to share?</Link>
            </div>
            <div className="h-fit  w-full flex flex-wrap justify-between">
                <button className="h-10 w-1/3 border-r-2 bg-opacity-60">Ask</button>
                <button className="h-10 w-1/3 border-r-2 bg-opacity-60 ">Answer</button>
                <button className="h-10 w-1/3  bg-opacity-60 ">Post</button>
            </div>
        </div>
    )
}   

export default QuickPostShare;