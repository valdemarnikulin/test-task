<template>
  <div class="card-person">
    <div class="card-person__wrapper">
      <div class="card-person__info">
        <div class="card-person__avatar">
          <img
            class="card-person__avatar-image"
            src="../assets/avatar_girl.png"
            alt="avatar"
          />
        </div>
        <div>
          <el-row :gutter="24" type="flex" align="middle" justify="end">
            <el-col :span="24">
              <div class="card-person__information">
                <div class="card-person__name">{{ person.name }}</div>
                <div class="card-person__male">
                  <img
                    class="card-person__male-image"
                    src="../assets/male.png"
                    alt="male"
                  />
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row
            class="card-person__margin"
            :gutter="24"
            type="flex"
            align="middle"
            justify="end"
          >
            <el-col :span="24">
              <div class="card-person__social">
                <a href="#"
                  ><img
                    class="image"
                    src="../assets/whatsapp.png"
                    alt="whatsapp"
                /></a>

                <a href="#"
                  ><img class="image" src="../assets/viber.png" alt="viber"
                /></a>
                <a href="#"
                  ><img
                    class="image"
                    src="../assets/telegram.png"
                    alt="telegram"
                /></a>
                <a href="#" class="card-person__comment">Комментарии</a>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="card-person__info-text">
        <el-row :gutter="24" type="flex" justify="end" align="middle">
          <el-col :span="8">
            <div>
              <div class="card-person__info-text-status">
                <div class="card-person__info-text-title">Телефон</div>
                <div
                  class="card-person__info-text-status-item-title status-item-title"
                >
                  <a href="tel:8-900-000-00-00">8-900-000-00-00</a>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <div class="card-person__info-text-status">
                <div class="card-person__info-text-title">Дата рождения</div>
                <div
                  class="card-person__info-text-status-item-title status-item-title"
                >
                  25.04.2004 (17 лет)
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="card-person__margin" :gutter="24">
          <el-col :span="8">
            <div>
              <div class="card-person__info-text-status">
                <div class="card-person__info-text-title">Статус</div>
                <div class="card-person__info-text-status-item status-item">
                  <div
                    class="card-person__info-text-status-item-value status-item-value"
                  ></div>
                  <div
                    class="card-person__info-text-status-item-title status-item-title"
                  >
                    Активен
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8"
            ><div>
              <div class="card-person__info-text-status">
                <div class="card-person__info-text-title">
                  Телефон родителей
                </div>
                <div
                  class="card-person__info-text-status-item-title status-item-title"
                >
                  <a href="tel:8-900-000-00-00">8-900-000-00-00</a>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <div class="card-person__info-text-status">
                <div class="card-person__info-text-title">Адрес</div>
                <div
                  class="card-person__info-text-status-item-title status-item-title"
                >
                  г. Краснодар, ул. Советская 24, кв. 208
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="card-person__info-action">
        <el-row :gutter="24" type="flex" align="middle" justify="end">
          <el-col :span="24">
            <i class="el-icon-edit"></i>
          </el-col>
        </el-row>
        <el-row
          class="card-person__margin"
          :gutter="24"
          type="flex"
          align="middle"
          justify="end"
        >
          <el-col :span="24">
            <i class="el-icon-delete"></i>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-person",
  data() {
    return {
      person: {
        name: "Абрамова Екатерина",
      },
    };
  },
};
</script>

<style lang="scss">
.card-person{
    border: 2px solid;
    border-radius: 12px;
    background-color: white;
    box-shadow: 2px 3px 10px grey;
    &__margin {
        margin-top: 20px;
    }
    &__wrapper{
        display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    gap: 30px;
    }
    &__name {
font-weight: 700;
font-size: 36px;
line-height: 43px;
color: #458AFB;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
&__info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    &-action {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;
    width: 100%;
max-width: 100px;
//     & i {
//     cursor: pointer;
//     font-size: 25px;
//     margin-bottom: 10px;
//     color: gray;
// }
// & i:hover {
//     color: #458AFB;
// }
}
}
&__info-text-title {
    color: #86939C;
    font-size: 14px;
    line-height: 17px;
}
&__information {
    display: flex;
    align-items: center;
    gap: 20px;
}
&__social {
    display: flex;
    align-items: center;
    gap: 10px;
}
&__comment{
    margin-left: 20px;
font-size: 18px;
line-height: 22px;
text-decoration-line: underline;
color: #458AFB;
cursor: pointer;
}
&__avatar-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
}
&__male-image {
            width: 12px;
            height: 27px;
        }
}

.image {
    width: 30px;
    height: 30px;
}
</style>
