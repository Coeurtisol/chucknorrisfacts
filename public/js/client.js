const api_url = "/api";

async function voter(aElement) {
  const { factid, note } = aElement.dataset;
  try {
    const data = await envoyerVote(factid, note);
    // console.log("data", data);
    location.reload();
  } catch (error) {
    console.log(error);
  }
}

async function envoyerVote(factId, note) {
  console.log(factId, note);
  const data = await fetch(`${api_url}/vote_note`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ factId, note }),
  });
  // console.log("data", data);
  return data;
}
