import { useParams } from "react-router"

function SocialLink({ name, url }) {
    return (
        <li className="bg-gray-700 rounded-md hover:bg-gray-500 cursor-pointer p-2">
            <a href={url} target="_blank">{name}</a>
        </li>
    )
}

const data = {
    name: "Jean Gustavo",
    avatar: "https://clarify.com.br/blog/wp-content/uploads/2024/09/istock-683542140_0.jpg",
    location: "Caraguatatuba, SP",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt commodi quas velit deleniti voluptates nulla maxime deserunt adipisci sed sunt.",
    links: [
        { name: "GitHub", url: "https://www.tudogostoso.com.br/receita/35-pamonha-doce.html" },
        { name: "Frontend Mentor", url: "https://www.tudogostoso.com.br/receita/35-pamonha-doce.html" },
        { name: "LinkedIn", url: "https://www.tudogostoso.com.br/receita/35-pamonha-doce.html" },
        { name: "Twitter", url: "https://www.tudogostoso.com.br/receita/35-pamonha-doce.html" },
        { name: "Instagram", url: "https://www.tudogostoso.com.br/receita/35-pamonha-doce.html" },
    ]
}

export default function Profile() {
    const { username } = useParams()

    return (
        <div className="h-screen bg-gray-800 flex justify-center items-center flex-col gap-4 p-2">

            <div className="max-w-md w-full mx-auto bg-gray-600 rounded-2xl p-5 text-white text-center font-raleway">
                {/* foto */}
                <img src={data.avatar} alt="" className="rounded-full size-40 object-cover mx-auto my-3"/>

                {/* nome completo */}
                <h1 className="text-3xl font-bold mb-3 font-oswald">{data.name}</h1>

                {/* localização */}
                <p className="text-blue-400 font-bold mb-6">{data.location}</p>

                {/* bio */}
                <p className="mb-4">{data.bio}</p>

                {/* links */}
                <ul className="space-y-2">
                    {data.links.map(link => (
                        <SocialLink key={link.name} name={link.name} url={link.url} />
                    ))}
                </ul>
                
            </div>

        </div>
    )
}