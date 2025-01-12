import React from "react";
import { Box } from "@chakra-ui/react";
import MsgList from "../../components/message/MsgList";
import { msgMock } from "../../MsgMock";
import { Note } from "../../MsgMock";

function Mailbox() {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      {msgMock?.length
        ? msgMock?.map((item: Note, idx) => {
            return (
              <div key={idx}>
                <MsgList {...item} />
              </div>
            );
          })
        : "받은 쪽지가 없습니다."}
    </Box>
  );
}

export default Mailbox;
