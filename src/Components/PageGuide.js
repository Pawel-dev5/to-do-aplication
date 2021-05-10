import React from "react";
import Joyride from "react-joyride";

export default function PageGuide() {
    return (
        <Joyride
            className="table"
            run={true}
            callback={() => null}
            steps={[
                {
                    content: "Przytrzymaj, aby przesunąć wiersze tabeli",
                    target: ".table"
                }
            ]}
        />
    );
}
