const Contact = () => {
    return (
        <div className="py-36 font-pupylinux">
        <div className="bg-[#3955A3] text-white p-5 rounded-xl w-[90vw] xl:container mx-auto text-center">
            <p className="font-medium text-3xl mb-3">Contact</p>
            <p className="mb-5">You can contact me on this social media</p>
            <div className="flex items-center justify-center">
                <a href="https://www.instagram.com/arieakbarull/?hl=id"><img src="/asset/icon/instagram.png" width="50" alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=100070950729478"><img src="/asset/icon/facebook.png" width="50" className="mx-5" alt="" /></a>
                <a href="https://wa.me/62881026233067"><img src="/asset/icon/whatsapp.png" width="50" alt="" /></a>
            </div>
        </div>
    </div>
    )
}

export default Contact