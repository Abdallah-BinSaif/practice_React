import getImageUrl from "./Image";


function Avatar ({name, imageId, size, proff, discover, nobel}){
    return(
        <>
        
        <section className="m-4 p-4 border-2 rounded-xl">
            <h2>{name}</h2>
            <img
              className="rounded-full"
              src={getImageUrl(imageId, size)}
              alt={name}
              width={70}
              height={70}
            />
            <ul>
              <li>
                <b>Profession: </b> 
                {proff}
              </li>
              <li>
                <b>Awards: {nobel.length} </b> 
                ({nobel.join(", ")})
              </li>
              <li>
                <b>Discovered: </b>
                {discover}
              </li>
            </ul>
          </section>
        </>
    );
};

export default Avatar;