<script type="text/javascript">

const api_url ="https://zenquotes.io/api/quotes/";

async function getapi(url)
{
  let response = await fetch(url);
  var data = await response.json();
  console.log(data);
}

getapi(api_url);

</script>