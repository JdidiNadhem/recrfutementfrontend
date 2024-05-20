import React from 'react'

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 px-10 shadow-md mx-10">
            <div className="flex items-center space-x-4">
                <img src="https://f.hellowork.com/blogdumoderateur/2021/02/apple-chiffres.jpeg" alt="Company Logo" className="w-[25%] rounded" />
                <div>
                    <h1 className="text-xl font-bold">Apple</h1>
                    <p>Apple conducts business ethically, honestly, and in full compliance with the law. We believe that how we conduct ourselves is as critical to Apple’s success as making the best products in the world. Our Compliance and Business Conduct policies are foundational to how we do business and how we put our values into practice every day.</p>
                </div>
            </div>
        </header>
    )
}

export default Header
