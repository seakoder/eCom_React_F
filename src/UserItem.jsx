function UserItem( {element} ) {
 
return  (
<div className="m-2 inline-block border border-gray-200 shadow p-4 text-center" key={element.login}> 
<div>
           <h2 className="ml-4" >{element.login}</h2>
           <img className="rounded-full" src={element.avatar_url} width={100} height={100} />
        </div>
        </div>
)

}

export default UserItem;