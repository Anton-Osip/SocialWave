import React from "react";

export const Profile = _props => {
    return (
        <div className = {'content'}>
            <div>
                <img
                    src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s"
                    alt = ""/>
            </div>
            <div>ava+description</div>
            <div>my posts
                <div>new posts</div>
                <div>
                    <div>post1</div>
                    <div>post2</div>
                    <div>post3</div>
                </div>
            </div>
        </div>
    )
}
