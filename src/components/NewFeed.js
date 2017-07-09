import React, {Component} from "react"
import {Grid, Button, Form, Input, Container, Image, Item, Card, List, Segment, Feed, Icon} from "semantic-ui-react"

class NewFeed extends Component {
  render() {
    return (
      <Container className="list-action">
        <Feed>
          <Feed.Event>
            <Feed.Label>
              <img src='https://maxcdn.icons8.com/Share/icon/Cinema//avatar1600.png' />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>Elliot Fu</Feed.User> added you as a friend
                <Feed.Date>1 Hour Ago</Feed.Date>
              </Feed.Summary>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />
                  4 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png' />
            <Feed.Content>
              <Feed.Summary>
                <a>Helen Troy</a> added <a>2 new illustrations</a>
                <Feed.Date>4 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a><img src='https://lh3.googleusercontent.com/OwJ-GrWYWegkWqIBISBNoxOi-um3gTRsJxmC1DUDJJWV-eMNPV7titRjPyAfjETC2BU' /></a>
                <a><img src='https://lh3.googleusercontent.com/OwJ-GrWYWegkWqIBISBNoxOi-um3gTRsJxmC1DUDJJWV-eMNPV7titRjPyAfjETC2BU' /></a>
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />
                  1 Like
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='https://freeiconshop.com/wp-content/uploads/edd/person-flat.png' />
            <Feed.Content>
              <Feed.Summary date='2 Days Ago' user='Jenny Hess' content='add you as a friend' />
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />
                  8 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='http://www.noviasalcedo.es/wp-content/uploads/2016/05/person-girl-flat.png' />
            <Feed.Content>
              <Feed.Summary>
                <a>Joe Henderson</a> posted on his page
                <Feed.Date>3 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>
                Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all
                over again. Even if we don't run extra laps that day, we surely will come back for more of the same another
                day soon.
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />
                  5 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label image='http://ayonglobaledu.com/images/contact.png' />
            <Feed.Content>
              <Feed.Summary>
                <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                <Feed.Date>4 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra images>
                <a><img src='http://e-motiveonline.com/wp-content/uploads/2014/10/Outsourcing-Services-298x300.png' /></a>
                <a><img src='http://e-motiveonline.com/wp-content/uploads/2014/10/Outsourcing-Services-298x300.png' /></a>
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />
                  41 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Container>
    )
  }
}

export default NewFeed
