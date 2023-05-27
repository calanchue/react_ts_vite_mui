import { Form, useLoaderData } from "react-router-dom";
import { Box, Typography } from "@mui/material";


interface Contact {
  first: string;
  last: string;
  avatar: string;
  twitter: string;
  notes: string;
  favorite: boolean;
}

interface FavoriteProps{
  contact: Contact
}

export default function Contact() {

  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row"}} id="contact">
      <Box sx={{borderRadius: '50%'}}>
        <img
          key={contact.avatar}
          src={contact.avatar}
        />
      </Box>

      <Box>
        <Typography display="inline" variant="h3">
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </Typography>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </Box>
    </Box>
  );
}

function Favorite({contact}: FavoriteProps) {
  let favorite = contact.favorite;
  return (
    <Box sx={{display: "inline"}}>
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
    </Box>
  );
}