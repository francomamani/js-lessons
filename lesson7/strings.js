
const iframe1 = '<iframe width="970" height="546" src="https://www.youtube.com/embed/txmw-wGnDoA?list=RDMMtxmw-wGnDoA" title="&quot;Planetarium&quot;  by Ai Otsuka" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>';
const iframe2 = '<iframe width="970" height="546" src="https://www.youtube.com/embed/txmw-wGnDoA?list=RDMMtxmw-wGnDoA" title="&quot;Planetarium&quot;  by Ai Otsuka" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>';
const iframe3 = '<iframe width="970" height="546" src="https://www.youtube.com/embed/txmw-wGnDoA?list=RDMMtxmw-wGnDoA" title="&quot;Planetarium&quot;  by Ai Otsuka" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>';
const res = [{ detalle: 'a', link: iframe1}, { detalle: 'ab', link: iframe2}, { detalle: 'abc', link: iframe3}];
const iframes = [];

res.forEach((element) => {
    let link = element.link;
    const widthRegex = /width="([0-9]+)"/;
    const heightRegex = /height="([0-9]+)"/;
    link = link.replace(widthRegex, 'width="320"').replace(heightRegex, 'height="320"');
    iframes.push({
        ...element,
        link
    });
});

console.log(iframes);