import path from 'path'
import { readFile } from 'fs/promises'
import { readFileSync } from 'fs'

interface TimeStamp {
  date: string
  activity: string
  detail: { title: string; link?: string }[]
}
const DATA_URL = path.join(process.cwd(), 'data')

export async function getTimeStamps() {
  const filePath = path.join(DATA_URL, 'about', 'timestamps.json')
  const timestampsJsontr = await readFile(filePath, 'utf-8')
  const timestamps = JSON.parse(timestampsJsontr) as TimeStamp[]
  return timestamps
}
