import { DateTimeFormatter, LocalDateTime } from "@js-joda/core"

const FormatDateTime = (ldt: LocalDateTime, pattern: string) =>{
    return ldt.format(DateTimeFormatter.ofPattern(pattern))
}

export {
    FormatDateTime,
}