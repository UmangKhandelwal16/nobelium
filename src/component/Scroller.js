import styles from './Scroller.module.css'
let Profile = [
    {
        id: 2,
        src: "https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=1024x1024&w=is&k=20&c=rsMEfrDiYh3Y2CbJ8OQYRfJZ2kOGBneREKETBn0vyjU=",
        name: "Swati Singh",
        profession: "Full Stack developer",
        experience: "5 year exp"
    },

    {
        id: 3,
        src: "https://media.istockphoto.com/id/1316137707/photo/shot-of-a-young-woman-working-from-home.jpg?s=1024x1024&w=is&k=20&c=i-dzLCxqn_wI_GdyrEGfSD409GK7hGPa2x-FOx5Wdcg=",
        name: "Tanvi Rai",
        profession: "Talent Manager",
        experience: "6 year exp"
    },

    {
        id: 4,
        src: "https://media.istockphoto.com/id/1442393058/photo/attractive-african-american-young-woman-sitting-at-desk-using-laptop-at-home-attractive.jpg?s=1024x1024&w=is&k=20&c=9qM9sXTtVuUhz4rbPFH25pX16--1ack4CsDg4BagyTE=",
        name: "Sweety Bhaskar",
        profession: "Full stack developer",
        experience: "5 year exp"
    },

    {
        id: 5,
        src: "https://media.istockphoto.com/id/490850657/photo/portrait-of-happy-woman-with-digital-tablet-in-home-office.jpg?s=1024x1024&w=is&k=20&c=wHf2Vb6cCFITHccgTqTHyF1KjhdjN46QLJewop6YT_M=",
        name: "Amisha Rai",
        profession: "Senior IT Engineer",
        experience: "10 year exp"
    },

    {
        id: 6,
        src: "https://media.istockphoto.com/id/1126510836/photo/the-suns-up-and-so-is-my-mood.jpg?s=1024x1024&w=is&k=20&c=MPFFPrWkgC1BmioZ8h_bXHonlMYPsfrXEg7nP0tKjnY=",
        name: "Priya Sharma",
        profession: "Human resource manager",
        experience: "2 year exp"
    },

    {
        id: 7,
        src: "https://media.istockphoto.com/id/1328898190/photo/young-woman-using-technology-in-a-home.jpg?s=1024x1024&w=is&k=20&c=EXWdPU7iMBVIDW580xYQYunjzJOKDEQ-vUKRFlbDb2A=",
        name: "Tanu Singh",
        profession: "Full Stack developer",
        experience: "5 year exp"
    },


    {
        id: 2,
        src: "https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=1024x1024&w=is&k=20&c=rsMEfrDiYh3Y2CbJ8OQYRfJZ2kOGBneREKETBn0vyjU=",
        name: "Swati Singh",
        profession: "Full Stack developer",
        experience: "5 year exp"
    },

    {
        id: 3,
        src: "https://media.istockphoto.com/id/1316137707/photo/shot-of-a-young-woman-working-from-home.jpg?s=1024x1024&w=is&k=20&c=i-dzLCxqn_wI_GdyrEGfSD409GK7hGPa2x-FOx5Wdcg=",
        name: "Tanvi Rai",
        profession: "Talent Manager",
        experience: "6 year exp"
    },

    {
        id: 4,
        src: "https://media.istockphoto.com/id/1442393058/photo/attractive-african-american-young-woman-sitting-at-desk-using-laptop-at-home-attractive.jpg?s=1024x1024&w=is&k=20&c=9qM9sXTtVuUhz4rbPFH25pX16--1ack4CsDg4BagyTE=",
        name: "Sweety Bhaskar",
        profession: "Full stack developer",
        experience: "5 year exp"
    },

    {
        id: 5,
        src: "https://media.istockphoto.com/id/490850657/photo/portrait-of-happy-woman-with-digital-tablet-in-home-office.jpg?s=1024x1024&w=is&k=20&c=wHf2Vb6cCFITHccgTqTHyF1KjhdjN46QLJewop6YT_M=",
        name: "Amisha Rai",
        profession: "Senior IT Engineer",
        experience: "10 year exp"
    },

    {
        id: 6,
        src: "https://media.istockphoto.com/id/1126510836/photo/the-suns-up-and-so-is-my-mood.jpg?s=1024x1024&w=is&k=20&c=MPFFPrWkgC1BmioZ8h_bXHonlMYPsfrXEg7nP0tKjnY=",
        name: "Priya Sharma",
        profession: "Human resource manager",
        experience: "2 year exp"
    },

    {
        id: 7,
        src: "https://media.istockphoto.com/id/490850657/photo/portrait-of-happy-woman-with-digital-tablet-in-home-office.jpg?s=1024x1024&w=is&k=20&c=wHf2Vb6cCFITHccgTqTHyF1KjhdjN46QLJewop6YT_M=",
        name: "Tanu Singh",
        profession: "Full Stack developer",
        experience: "5 year exp"
    },

    {
        id: 1,
        src: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Harsh Kumar",
        profession: "Software Engineer",
        experience: "6 year exp"
    },

    {
        id: 2,
        src: "https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=1024x1024&w=is&k=20&c=rsMEfrDiYh3Y2CbJ8OQYRfJZ2kOGBneREKETBn0vyjU=",
        name: "Swati Singh",
        profession: "Full Stack developer",
        experience: "5 year exp"
    },

    {
        id: 3,
        src: "https://media.istockphoto.com/id/1316137707/photo/shot-of-a-young-woman-working-from-home.jpg?s=1024x1024&w=is&k=20&c=i-dzLCxqn_wI_GdyrEGfSD409GK7hGPa2x-FOx5Wdcg=",
        name: "Tanvi Rai",
        profession: "Talent Manager",
        experience: "6 year exp"
    },

    {
        id: 4,
        src: "https://media.istockphoto.com/id/1442393058/photo/attractive-african-american-young-woman-sitting-at-desk-using-laptop-at-home-attractive.jpg?s=1024x1024&w=is&k=20&c=9qM9sXTtVuUhz4rbPFH25pX16--1ack4CsDg4BagyTE=",
        name: "Sweety Bhaskar",
        profession: "Full stack developer",
        experience: "5 year exp"
    },

    {
        id: 5,
        src: "https://media.istockphoto.com/id/490850657/photo/portrait-of-happy-woman-with-digital-tablet-in-home-office.jpg?s=1024x1024&w=is&k=20&c=wHf2Vb6cCFITHccgTqTHyF1KjhdjN46QLJewop6YT_M=",
        name: "Amisha Rai",
        profession: "Senior IT Engineer",
        experience: "10 year exp"
    },

    {
        id: 6,
        src: "https://media.istockphoto.com/id/1126510836/photo/the-suns-up-and-so-is-my-mood.jpg?s=1024x1024&w=is&k=20&c=MPFFPrWkgC1BmioZ8h_bXHonlMYPsfrXEg7nP0tKjnY=",
        name: "Priya Sharma",
        profession: "Human resource manager",
        experience: "2 year exp"
    },

    {
        id: 7,
        src: "https://media.istockphoto.com/id/1328898190/photo/young-woman-using-technology-in-a-home.jpg?s=1024x1024&w=is&k=20&c=EXWdPU7iMBVIDW580xYQYunjzJOKDEQ-vUKRFlbDb2A=",
        name: "Tanu Singh",
        profession: "Full Stack developer",
        experience: "5 year exp"
    },

    {
        id: 8,
        src: "https://media.istockphoto.com/id/1316137707/photo/shot-of-a-young-woman-working-from-home.jpg?s=1024x1024&w=is&k=20&c=i-dzLCxqn_wI_GdyrEGfSD409GK7hGPa2x-FOx5Wdcg=",
        name: "Sushmita singh",
        profession: "senior HR recruiter",
        experience: "10 year exp"
    },

    {
        id: 9,
        src: "https://media.istockphoto.com/id/1040950114/photo/young-woman-using-laptop-at-home-doing-teleworking.jpg?s=1024x1024&w=is&k=20&c=HPMdRLROg7_YKvmC5LDmSYNHi8A0GEhqyF4VKnBtFA8=",
        name: "Iliana D'souza",
        profession: "DSA Specialist",
        experience: "5 year exp"
    },

    {
        id: 10,
        src: "https://media.istockphoto.com/id/1408432107/photo/student-typing-in-a-laptop-in-her-room-stock-photo.jpg?s=1024x1024&w=is&k=20&c=cy7GI_eSu5p00D8WgFsxRjgL-ApknG1YgmnYxbrA6Cc=",
        name: "Tasu Ansari",
        profession: "Design Engineer",
        experience: "6 year exp"
    }

];

const Scroller = () => (
    <>
        <div className={styles.title}>
            <h2>Horizontal scroller</h2>
        </div>
        <div className={styles.header}>
            <h1>Know your mentors</h1>
            <p>Works with amentor (senior data scientists from top companies) who closely looks your progress,give you personalizied<br /> feed back amd helps in your knowledge</p>
        </div>

        <div className={styles.imagescroller}>
            <p></p>
            {
                Profile.map((data) => (
                    <div key={data.id} className={styles.imagecard}>
                        <div className={styles.imagewrapper}>
                            <img src={data.src} alt={data.name} className={styles.imageround} />
                        </div>
                        <div className={styles.imagedetails}>
                            <h5>{data.name}</h5>
                            <h6>{data.profession}</h6>
                            <span>{data.experience}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
)

export default Scroller;