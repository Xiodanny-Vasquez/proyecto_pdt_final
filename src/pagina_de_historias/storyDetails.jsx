import { useParams, Link } from "react-router-dom";
import { stories } from "../data/storiesData";

const StoryDetails = () => {
    const { slug } = useParams();
    const story = stories.find((s) => s.slug === slug);

    if (!story)
        return (
            <p style={{ color: "#fff", padding: 40 }}>
                Historia no encontrada.
            </p>
        );

    return (
        <div
            style={{
                maxWidth: 800,
                margin: "40px auto",
                padding: "0 16px",
                color: "#f5f5f5",
            }}
        >
            <Link to="/historias" style={{ color: "#e63946", textDecoration: "none" }}>
                ← Volver a historias
            </Link>

            <h1 style={{ marginTop: 16 }}>{story.title}</h1>

            <img
                src={story.cover}
                alt={story.title}
                style={{
                    width: "100%",
                    maxHeight: 360,
                    objectFit: "cover",
                    borderRadius: 10,
                    margin: "16px 0",
                }}
            />

            <p style={{ lineHeight: 1.6, whiteSpace: "pre-line" }}>
                {story.text}
            </p>

            <button
                style={{
                    marginTop: 24,
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: 6,
                    background: "#e63946",
                    color: "#fff",
                    cursor: "pointer",
                }}
            >
                Comprar libro – {story.price}
            </button>
        </div>
    );
};

export default StoryDetails;
